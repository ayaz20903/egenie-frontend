export default function MessageBubble({ msg, onOptionClick }) {
  if (msg.user) {
    return (
      <div className="flex justify-end mb-3">
        <div className="bg-[#DCF8C6] text-black px-4 py-2 rounded-2xl max-w-[80%] text-sm shadow-sm relative">
          <div className="absolute -right-1 top-3 w-0 h-0 border-l-[8px] border-l-[#DCF8C6] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
          {msg.message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-3">
      <div className="bg-white text-black px-4 py-2 rounded-2xl max-w-[80%] text-sm shadow-sm relative">
        <div className="absolute -left-1 top-3 w-0 h-0 border-r-[8px] border-r-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
        <p className="text-gray-800">{msg.message}</p>
        {msg.options && (
          <div className="flex flex-wrap gap-2 mt-3">
            {msg.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => onOptionClick(opt)}
                className="bg-[#E5E5E5] text-[#075E54] px-3 py-2 rounded-xl text-xs font-medium hover:bg-[#D9FDD3] transition-all border border-gray-300"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
