import React from "react";
import Container from "../Container";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "/src/features/counter/counterSlice";
import Flex from "../Flex";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <div>
          <Flex className={"h-[36px] w-[140px] text-center"}>
            <button
              className="w-1/3  cursor-pointer"
              aria-label="Decrement value"
              onClick={() => {
                if (count > 0) {
                  dispatch(decrement());
                }
              }}
            >
              -
            </button>
            <span className="w-1/3">{count}</span>
            <button
              className="w-1/3  cursor-pointer"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Counter;
