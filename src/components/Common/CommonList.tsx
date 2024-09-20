import React from 'react'

type Props<T> = {
	items: T[]
	renderItem: (item: T) => React.ReactNode
	_className: string
	WrapperComponent?: React.ElementType
}

const CommonList = <T,>({
	items,
	_className,
	renderItem,
	WrapperComponent,
}: Props<T>) => {
	const Wrapper = WrapperComponent as React.ElementType

	return (
		<>
			<Wrapper className={_className}>{items.map(renderItem)}</Wrapper>
		</>
	)
}

export default CommonList
