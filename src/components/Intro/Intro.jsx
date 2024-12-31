import TextBlob from '../TextBlob/TextBlob';
export default function Intro({blogTitle}) {
    return (
      <TextBlob>
        <p>
          Welcome to <b>{blogTitle}</b>, your one-stop-shop for easy to make recipes, brought to you from Dripping Springs, Texas!
        </p>
        <p>
          These are my favorite recipes to cook for my family on a weekly basis.  They're protein packed, easy to make, and delicious.
        </p>
      </TextBlob>
    )
  }