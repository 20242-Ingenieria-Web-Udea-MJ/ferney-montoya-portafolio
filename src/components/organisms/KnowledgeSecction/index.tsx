import { KnowledgeList } from '@/utils/KnowledgeList'
import KnowledgeCard from '@components/molecules/KnowledgeCard/index'

const KnowledgeSection = () => {
  return (
    <ul className='w-full mt-3 flex flex-wrap justify-center gap-2 md:flex-nowrap'>
        {
          KnowledgeList.map((item, index) => (
            <li className='w-full md:w-1/3 mb-6' key={index}>
              <KnowledgeCard icon={item.icon} text={item.text} title={item.title} />
            </li>
          ))
        }
      </ul>
  )
}

export default KnowledgeSection
