import { ResponsiveAreaBump } from '@nivo/bump'

const LineChart = ({ data }) => (
    <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={17}
        xPadding={0.1}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        fillOpacity={1}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        startLabel={true}
        startLabelPadding={13}
        endLabel="id"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
    />
)
export default LineChart;