import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-slate-400">
      <Component {...pageProps} />
    </div>
  );
}
