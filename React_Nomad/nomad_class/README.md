## import PropTypes from "prop-types"
```
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
```

## 버전에 따른 Router사용 방식이 다르다.
> 5ver에서 6ver으로변경 된 후 switch를 사용하지 않으며 구조 또한 다른다.
6ver에서의 Router의 구조는 아래와 같다.
```
<Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
```