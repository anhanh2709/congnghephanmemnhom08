import React, { Component } from "react";
import Axios from "axios";
import { domain } from "../../Config/Setting";

export class TheaterService {
    fetchTheaterList = () => {
        return Axios({
            method: "GET",
            url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
        });
    };
}

export const theaterService = new TheaterService();