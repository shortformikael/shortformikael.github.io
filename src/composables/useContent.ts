interface content {
  id: number,
  title: string
  contentHeader: string,
  content: string,
  image: string,
}

const contents :Array<content> = [
  {
    id: 0,
    title: 'About Me',
    contentHeader: 'header',
    content: 'Content lorem lispus for god hell yeah baby',
    image: 'aboutme.png'
  },
  {
    id: 1,
    title: 'Distancify',
    contentHeader: 'header',
    content: 'Content lorem lispus for god hell yeah baby',
    image: 'aboutme.png'
  },
  {
    id: 2,
    title: 'Informatics Bachelor\'s Degree',
    contentHeader: 'header',
    content: 'Content lorem lispus for god hell yeah baby',
    image: 'aboutme.png'
  },
  {
    id: 3,
    title: '',
    contentHeader: '',
    content: '',
    image: ''
  },
]

function getContent() {
  return contents;
}

export default getContent;