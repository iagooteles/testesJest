import { fireEvent, render, screen } from "@testing-library/react"
import { AsideNav } from "../../aside-nav"
import { BrowserRouter, useNavigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import "@testing-library/jest-dom"

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}));

const renderComponent = () => {
    const queryClient = new QueryClient();

    render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AsideNav />
            </BrowserRouter>
        </QueryClientProvider>
    )
    return {queryClient}
}

describe("AsideNav", () => {
    it("should render correctly", () => {
        renderComponent();
        
        expect(screen.getByText("All files")).toBeInTheDocument();
        expect(screen.getByText("Favorites")).toBeInTheDocument();
    })

    it("should call navigate when hits the All files button", () => {
        renderComponent();
        const btnAllFiles = screen.getByText("All files");
        fireEvent.click(btnAllFiles);

        expect(mockNavigate).toHaveBeenCalledWith("/");
    })

    it("should call navigate when hits the favorites button", () => {
        renderComponent();
        const btnFavorites = screen.getByText("Favorites");
        fireEvent.click(btnFavorites);

        expect(mockNavigate).toHaveBeenCalledWith("/favorites");
    })

})
