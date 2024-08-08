// components
import ShadowBox from "../../../public-components/structure/ShadowBox";

export default function LeftChoiceTab({moreClassName, children}) {

  return (
   <ShadowBox moreClassName={`${moreClassName}`}> 
        <div className="divide-y divide-gray-200">
            {children}
        </div>
    </ShadowBox>

  )
}
