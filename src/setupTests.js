import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

class LocalStorage {
  constructor() {
    this.store = {};
  }

  getItem = key => {
    return this.store[key];
  };

  setItem = (key, element) => {
    return (this.store[key] = element);
  };

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorage();
