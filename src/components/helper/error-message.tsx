export default function ErrorMessage({ error }: { error: string }) {
    if (error === '') return null;
    return <p className="text-red-700 my-4">{error}</p>;
  }
  