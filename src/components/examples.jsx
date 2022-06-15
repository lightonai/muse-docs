import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Examples = ({ tabs, children }) => {
    return (
        <Tabs
            defaultValue={tabs[0].toLowerCase()}
            values={tabs.map((name) => ({
                label: name,
                value: name.toLowerCase(),
            }))}
        >
            {tabs.map((name, index) => (
                <TabItem key={name.toLowerCase()} value={name.toLowerCase()}>
                    {children[index]}
                </TabItem>
            ))}
        </Tabs>
    );
};
