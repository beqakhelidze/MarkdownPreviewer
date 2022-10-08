import { useToggle } from "../Hooks/useToggle";
import InstructionsContext from "./InstructionsContext ";

const Instructions = ({ setMarkdown }) => {

    const [showInstructions, setShowInstructions] = useToggle();

    return (
        <div className="instuctionsDiv">
            <button
                className="instructionsButton"
                onMouseOver={() => setShowInstructions()}
                onMouseOut={() => setShowInstructions()}
            >
                See instructions
            </button>
            {showInstructions && <InstructionsContext
                setShowInstructions={setShowInstructions}
                setMarkdown={setMarkdown}
            />}
        </div>
    )
}

export default Instructions;