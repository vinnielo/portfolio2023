import { useWindowSize } from "@reactuses/core";
import Confetti from 'react-confetti'

export default function ThankYou() {
    const { width, height } = useWindowSize()

  return (
    <>
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={1220}
    />
    <div class="jumbotron text-center">
      <h1 class="display-3">Thank You!</h1>
      <p class="lead">
        <strong>Thank you for reaching out to me.</strong> Your message has been received and is important to me. I will review your inquiry and respond as soon as possible. 
      </p>
      <hr />
      <p>
        Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
      </p>
      <p class="lead">
        <a
          class="btn btn-primary btn-sm"
          href="/"
          role="button"
        >
          Continue to homepage
        </a>
      </p>
    </div>
    </>
  );
}
