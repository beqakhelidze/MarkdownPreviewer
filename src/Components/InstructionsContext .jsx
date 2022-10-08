import SingleInstruction from "./SingleInstruction";
import { InstructionObject, Default } from "../public";

const InstructionsContext = ({ setShowInstructions, setMarkdown }) => {

    const handleClick = () =>{
        setMarkdown(Default);
        setShowInstructions();
    }

    return (
        <div className="instructionsContext"
            onMouseOver={() => setShowInstructions()}
            onMouseOut={() => setShowInstructions()}
        >
            <ol>
                {
                    Object.entries(InstructionObject).map((item) => {
                        return <SingleInstruction key={item[0]} itemKey={item[0]} value={item[1]} />
                    })
                }
            </ol>
            <div className="DefaultValueDiv">
                <button
                    onClick={handleClick}
                >
                    See more in editor with default value
                </button>
            </div>
        </div>
    )
}

export default InstructionsContext;