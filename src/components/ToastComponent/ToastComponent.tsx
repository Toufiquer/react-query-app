export default function ToastComponent({
  message,
  error,
}: {
  message: string;
  error: boolean;
}) {
  return (
    <main className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
      {error ? (
        <div className="text-4xl">{message || "Ops! error Happen"}</div>
      ) : (
        <div className="text-4xl">{message || "Success "}</div>
      )}
    </main>
  );
}
