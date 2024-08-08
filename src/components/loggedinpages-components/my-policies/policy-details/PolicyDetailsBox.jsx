import { Skeleton, Typography } from '@mui/material';
import SubTitle from '../../../public-components/structure/SubTitle';
import ShadowBox from '../../../public-components/structure/ShadowBox';

export default function PolicyDetailsBox({children, sectionName, iconImg, isSkeleton=false, isPersonSection=true}) {

const IconImg = iconImg;

return (
  <div>

    <SubTitle isSkeleton={isSkeleton} IconImg={IconImg} sectionName={sectionName}/>

    { !isPersonSection ? (
      <ShadowBox>
        <div className="border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {children}
            </dl>
          </div>
      </ShadowBox>
    ):(
      <div className="space-y-9">
        {children}
      </div>
    )}
    
  </div>
  )
}