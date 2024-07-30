
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crew" element={<Crew />} />
        {/* <Route path="/destination" element={<Destination />} /> */}
        {/* <Route path="/technology" element={<Technology />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
