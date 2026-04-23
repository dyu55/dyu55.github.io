interface TweetEmbedProps {
  tweetId: string;
}

export function TweetEmbed({ tweetId }: TweetEmbedProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border/50">
      <blockquote className="twitter-tweet">
        <a href={`https://twitter.com/x/status/${tweetId}`}>
          Loading tweet...
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </div>
  );
}