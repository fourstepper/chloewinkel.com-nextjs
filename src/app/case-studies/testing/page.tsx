import * as c from '../../../components/Components'
import Image from 'next/image'

export default function TestingStudy() {
    return (
        <section>
        <c.h1>
        Example case study
        </c.h1>
        <c.p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        </c.p>
        <c.p>
        Single image
        </c.p>
        <c.GridWrapper>
            <Image
                src='/next.svg'
                alt='next logo'
                width='200'
                height='30'
            />
        </c.GridWrapper>
        <c.p>
        Double image
        </c.p>
        <c.GridWrapper>
            <Image
                src='/next.svg'
                alt='next logo'
                width='200'
                height='30'
            />
            <Image
                src='/next.svg'
                alt='next logo'
                width='200'
                height='30'
            />
        </c.GridWrapper>
        </section>
    )
}
