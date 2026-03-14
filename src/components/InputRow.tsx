interface InputRowProps {
  inputA: string;
  inputB: string;
  onChangeA: (value: string) => void;
  onChangeB: (value: string) => void;
}

export const InputRow = ({
  inputA,
  inputB,
  onChangeA,
  onChangeB,
}: InputRowProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="input-a" className="text-sm font-medium text-gray-700">
          Значение A
        </label>
        <input
          id="input-a"
          type="text"
          value={inputA}
          onChange={(e) => onChangeA(e.target.value)}
          placeholder="напр. 3.14"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="input-b" className="text-sm font-medium text-gray-700">
          Значение B
        </label>
        <input
          id="input-b"
          type="text"
          value={inputB}
          onChange={(e) => onChangeB(e.target.value)}
          placeholder="напр. 2"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
