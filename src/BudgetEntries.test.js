import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BudgetEntries from './BudgetEntries';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders budget entries", async () => {
  const fakeBudgetEntry = {
    EntryDate: new Date(),
    Amount: 2100,
    Category: "groceries",
    Description: "food train"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeBudgetEntry)
    })
  );

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
