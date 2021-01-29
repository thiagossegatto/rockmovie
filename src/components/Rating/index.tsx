import React from "react";
import { Container } from "./styled";
import Star from '../Icons/Star'
import { useMovies } from "../../hooks/Movies";

function Rating() {
  const { setSearch, search } = useMovies();

  const handleRate = (rated: number) => {
    if (rated === search?.["vote_average.lte"]) {
      setSearch(search => { return { query: search?.query } })
    } else {
      setSearch(search => { return { ...search, 'vote_average.gte': rated - 2, 'vote_average.lte': rated } })
    }
  }

  return (
    <Container>
      <div>
        {[2, 4, 6, 8, 10].map((i: number) => (
          <Star key={i} style={search?.["vote_average.lte"] && i <= search?.["vote_average.lte"] ? { fill: '#ff9000' } : { fill: '#333' }} onClick={() => handleRate(i)} />
        ))}
      </div>
    </Container>
  )
}

export default Rating;
