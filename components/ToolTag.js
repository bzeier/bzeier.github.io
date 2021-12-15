import Button from "@material-tailwind/react/Button"
import { Chip } from "@material-ui/core";

function ToolTag({ name }) {

    const getColor = function () {

        switch (name.toLowerCase()) {
            case 'C#':
                return 'teal';
            case 'java':
                return 'orange'
            case 'lua':
                return 'red';
            case 'game maker':
                return 'green';
            case 'unreal engine':
                return 'blue';
            case 'unity':
                return 'brown';
        }


        return 'gray'
    }

    return (

        <div className="items-center inline-block p-0.5">
            <Button color={getColor()} className="border-0" size="sm">
                <text className="font-semibold">{name}</text>
            </Button>
        </div>

    )
}

export default ToolTag
