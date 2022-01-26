import { Request, Response } from "express";
import axios from "axios";
import mergeSort from "../utils/MergeSort";

export default {
  async index(req: Request, res: Response) {
    var page = 1;
    var numbers: number[] = [];
    var finished = false;

    while (page < 5) {
      await axios
        .get(`http://challenge.dienekes.com.br/api/numbers?page=${page}`)
        .then((response) => {
          if (!response.data.numbers[0]) finished = true;
          numbers = numbers.concat(mergeSort(response.data.numbers));
          page++;
        })
        .catch((err) => {
          console.log(`Erro ao requisitar a página ${page}`);
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log("Error", err.message);
          }
        })
        .then(() => {});
    }

    res.send(mergeSort(numbers));
  },
};
