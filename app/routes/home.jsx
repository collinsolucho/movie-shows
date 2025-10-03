export function meta() {
  return [{ title: "movies" }, { name: "description", content: "movies!" }];
}

export default function Home() {
  return (
    <hero>
      <div className="bg-[url(/images/welcome.jpeg)] bg-no-repeat max-w-4xl bg-cover m-auto text-blue-600 text-center h-96 text-2xl font-bold p-6">
        <p>Unlimited Movies, One Destination</p>
        <p>Stream. Discover. Repeat.</p>
        <p>Your World of Entertainment Starts Here</p>
        <p>Watch the Latest Blockbusters Anytime</p>
        <p>Where Stories Come Alive</p>
      </div>
    </hero>
  );
}
