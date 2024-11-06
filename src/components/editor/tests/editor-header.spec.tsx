import { fireEvent, render, screen } from "@testing-library/react"
import { EditorHeader } from "../editor-header"

const renderComponent = () => {
    return render (
        <EditorHeader />
    )
}

describe("EditorHeader", () => {
    it ("should render correctly", () => {
        renderComponent();

        expect(screen.getByText("Heading")).toBeTruthy();
    })

    // it.each([["heading-1", "#"], ["heading-2", "##"], ["heading-3", "###"]])(("should set body when hit element btn"), (btnId, value) => {
    //     renderComponent();

    //     const btn = screen.getByTestId(btnId)

    //     fireEvent.click(btn)
    // })
})