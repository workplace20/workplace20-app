const Loading = () => (
  <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-100 opacity-75 flex flex-col items-center justify-center">
    <div style={{ borderTopColor: "#F97316" }} className="animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16"></div>
  </div>
)

export default Loading;