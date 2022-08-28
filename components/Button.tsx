export function PrimaryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...props}
    />
  );
}
export function SecondaryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      className="rounded-md shadow-sm ring-1 ring-slate-700/10 bg-white hover:bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed"
      {...props}
    />
  );
}
