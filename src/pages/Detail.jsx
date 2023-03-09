// import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useActionData, useNavigate, useParams } from "react-router-dom";
// import { getTodoByID } from "../redux/modules/todos.js";

const Detail = () => {
  // const dispatch = useDispatch();
  // const todo = useSelector((state) => state.todos.todo);
  //     todo: state.todos.find((todo) => {
  //       return todo.id === action.payload;
  //     }),

  const { id } = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos.todos);
  const detailTodo = todos.find((todo) => todo.id === parseInt(id));

  // const todos = useSelector(({ todos }) => todos.todos);
  // const detailTodo = todos.find((todo) => todo.id === parseInt(id));
  console.log(detailTodo);
  if (!detailTodo) {
    return (
      <h1 style={{ color: "tomato", textAlign: "center" }}>
        <p>5번 퀴즈 id 불러오기 실패했어요..🥲🥲</p>
        <p style={{ color: "#b6b6b6" }}>(init todo는 그래도 돼요..)</p>
      </h1>
    );
  }

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div key={detailTodo.id}>ID :{detailTodo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{detailTodo.title}</StTitle>
          <StBody>{detailTodo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
