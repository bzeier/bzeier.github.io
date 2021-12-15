import Button from "@material-tailwind/react/Button"

function ToolTag({ name }) {

    const getColor = function () {

        switch (name.toLowerCase()) {
            case 'C#':
                return 'teal';
            case 'java':
                return 'orange'
            case 'lua':
                return 'red';
            case 'unreal engine':
                return 'blue';
            case 'unity':
                return 'green';
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
