import { VariableInJsx } from './VariableInJsx.js'
import { ConditionInJsx } from './ConditionInJsx.js'
import { FunctionInJsx } from './FunctionInJsx.js'
import { RenderList } from './RenderList.js'

function App() {
    return (
        <div>
            {/* inside curly braces we write javascript expression */}
            <p>result = {2 + 6}</p>

            <VariableInJsx />

            <ConditionInJsx />

            <FunctionInJsx />

            <RenderList />

        </div>
    )
}

export { App }