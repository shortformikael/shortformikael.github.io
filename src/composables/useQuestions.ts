interface question {
  id: string,
  content: string,
  correct: string,
  answer: string,
  options: {
    a: string,
    b: string,
    c: string,
    d: string
  }
}

const questions :Array<question> = [
  {
    id: '0',
    content: 'What is the best fruit?',
    correct: 'banana',
    answer: '',
    options: {
      a: 'pears',
      b: 'pineapples',
      c: 'banana',
      d: 'apple'
    }
  },
  {
    id: '1',
    content: 'What is the tallest mountain in the world?',
    correct: 'Mt. Everest',
    answer: '',
    options: {
      a: 'Mt. Everest',
      b: 'Mt. Fiji',
      c: 'Mt. Cucumba',
      d: 'Mt. Broil'
    }
  },
  {
    id: '2',
    content: 'Who is the smallest man in the world?',
    correct: 'Tony the Giant',
    answer: '',
    options: {
      a: 'Tommy Diesel',
      b: 'Chadwick Boseman',
      c: 'Tony the Giant',
      d: 'Mr. Bean'
    }
  }
]

function getQuestions() {
  return questions;
}

export default getQuestions;