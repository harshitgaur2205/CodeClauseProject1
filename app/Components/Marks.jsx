import { ResponsiveMarimekko } from '@nivo/marimekko'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Marks = ({ data /* see data tab */ }) => (
    <ResponsiveMarimekko
        data={data}
        id="statement"
        value="participation"
        dimensions={[
            {
                id: 'disagree strongly',
                value: 'stronglyDisagree'
            },
            {
                id: 'disagree',
                value: 'disagree'
            },
            {
                id: 'agree',
                value: 'agree'
            },
            {
                id: 'agree strongly',
                value: 'stronglyAgree'
            }
        ]}
        innerPadding={20}
        axisTop={null}
        axisRight={{
            orient: 'right',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0,
            truncateTickAt: 0
        }}
        
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Liters',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={true}
        margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
        colors={{ scheme: 'spectral' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1'
                ]
            ]
        }}
        motionConfig={{
            mass: 1,
            tension: 170,
            friction: 128,
            clamp: false,
            precision: 0.01,
            velocity: 0
        }}
        
    />
)

export default Marks;