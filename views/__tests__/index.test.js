import ejs from 'ejs'
import template from '../index.ejs'
import dummyData from './data/dummyData.js'

test("the UI must have a title", async () => {
  const output = ejs.render(template, dummyData);
  console.log(output)
});
