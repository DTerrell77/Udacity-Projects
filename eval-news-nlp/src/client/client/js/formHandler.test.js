// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"

test('handleSubmit to be a function', () => {
  expect(typeof handleSubmit).toBe('function');
});