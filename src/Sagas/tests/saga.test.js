import fetchSongsWatcher, { fetchSongsWorker } from "../saga";
import sinon from "sinon";
import SagaActionTypes from "../sagaActionTypes";

import { cloneableGenerator } from "@redux-saga/testing-utils";

import { put, call, takeEvery } from "redux-saga/effects";
import {
  setLoaderAction,
  setSearchedTermAction,
  setSongsAction,
} from "../../Helpers/actions";
import { searchSongsApi } from "../../Services/songs";
import { mockResponse } from "../../Constants/constants";
import * as api from "../../Services/songs";

describe("Saga TestCases", () => {
  it("it should call fetchSongsWorker", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWatcher)(actionObject);
    expect(generator.next().value).toEqual(
      takeEvery(SagaActionTypes.SEARCH_SONGS, fetchSongsWorker)
    );
  });
  it("it should call setShowLoader", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    expect(generator.next().value).toEqual(put(setLoaderAction(true)));
  });
  it("it should call searchSong api", () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    generator.next();
    expect(generator.next().value).toEqual(
      call(searchSongsApi, actionObject.searchedTerm)
    );
  });
  it("it should call setSearchedTermAction and setSongsAction", async () => {
    const actionObject = { searchedTerm: "Test Search Term" };
    const generator = cloneableGenerator(fetchSongsWorker)(actionObject);
    sinon.stub(api, "searchSongsApi").callsFake(() => mockResponse);

    generator.next();
    generator.next();

    searchSongsApi.calledWith("Sample Search");
    const expectedObject = generator.next(mockResponse).value;
    const actualObject = put(setSongsAction(mockResponse));
    expect(expectedObject.payload.action.type).toEqual(
      actualObject.payload.action.type
    );
  });
});
