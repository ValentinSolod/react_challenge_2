import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SortDropdown from "../sort-dropdown";
import ListCard from "./components/list-card";
import { HttpRequestTourService } from "../../services/http-client";
import { TourNormalized } from "../../types";
import breakpoint from "../../constants/breakpoints";

const SelectContainer = styled.div`
  margin: 20px auto;
  max-width: 75.5%;

  @media only screen and ${breakpoint.device.lg} {
    max-width: 100%;
  }
`;

const TourListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 75.5%;

  @media only screen and ${breakpoint.device.lg} {
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export default function TourList(): JSX.Element {
  const service = HttpRequestTourService.Instance;
  const [activeSort, setActiveSort] = useState<string>("");
  const [tours, setTours] = useState<Array<TourNormalized>>([]);

  useEffect(() => {
    service.getTours().then((list) => {
      const uuidList = list.map((item) => ({ key: uuidv4(), ...item }));
      setTours(uuidList);
    });
  }, [service]);

  const handleSelect = (event) => {
    const { value } = event.target;
    setActiveSort(value);
  };

  const sortTours = useCallback(
    (toursToSort: Array<TourNormalized>, sortType: string) => {
      switch (sortType) {
        case "cheap": {
          return toursToSort.sort((a, b) => b.price - a.price);
        }
        case "expensive": {
          return toursToSort.sort((a, b) => a.price - b.price);
        }
        case "short": {
          return toursToSort.sort((a, b) => b.length - a.length);
        }
        case "long": {
          return toursToSort.sort((a, b) => a.length - b.length);
        }
        default:
          return tours;
      }
    },
    [tours]
  );

  useEffect(() => {
    if (activeSort) setTours(sortTours(tours, activeSort));
  }, [activeSort, sortTours, tours]);

  return (
    <>
      <SelectContainer>
        <SortDropdown value={activeSort} onChange={handleSelect} />
      </SelectContainer>
      <TourListCardWrapper>
        {tours.map((tour) => (
          <ListCard key={tour.key} tour={tour} />
        ))}
      </TourListCardWrapper>
    </>
  );
}
