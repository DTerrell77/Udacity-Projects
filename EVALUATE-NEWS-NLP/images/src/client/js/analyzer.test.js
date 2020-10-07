import { updateUI } from './analyzer'

test('analyze a url for polarity and subjectivity', () => {
  document.body.innerHTML = `
    <section>
      <p>Results:</p>
      <div class="results" id="polarity"></div>
      <div class="results" id="subjectivity"></div>
    </section> `;
  updateUI({
    polarity: 'positive',
    subjectivity: 'subjective',
    text: 'How I met your mother is the best sitcom of all time!',
    polarity_confidence: 0.8453548615505148,
    subjectivity_confidence: 1,
    
  });
  expect(document.getElementById('subjectivity').innerHTML).toBe('Subjectivity: subjective');
});