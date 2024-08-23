import { render, fireEvent, screen } from "@testing-library/react";
import { PersistGate } from "redux-persist/integration/react";
// import userEvent from '@testing-library/user-event';
import LoginPage from "../pages/LoginPage";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";

describe("LoginForm Component", () => {
  // Positive scenario: Successful form submission
  test("submitting the form with valid inputs", () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MemoryRouter>
            <LoginPage />
          </MemoryRouter>
        </PersistGate>
      </Provider>
    );

    // Fill in email and password fields
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "myemail@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("LOG IN"));

    // Assert that setIsAuth was called
    expect(screen.queryByText("Enter a valid Email")).toBeNull();
    expect(screen.queryByText("Enter Password")).toBeNull();
  });

  // Negative scenario: Form submission with invalid inputs
  // test("submitting the form with invalid inputs", async () => {
  //   render(
  //     <Provider store={store}>
  //       <PersistGate loading={null} persistor={persistor}>
  //         <MemoryRouter>
  //           <LoginPage />
  //         </MemoryRouter>
  //       </PersistGate>
  //     </Provider>
  //   );
    
  //   // Simulate an action that triggers the error message
  // const loginButton = screen.getByRole('button', { name: /LOG IN/i });
  // userEvent.click(loginButton);

  // // Wait for the error message to appear
  // await waitFor(() => {
  //   const errorMessage = screen.findByText(/Enter a valid Email/i);
  //   expect(errorMessage).toBeInTheDocument();
  // });
  // });
});
