import React, {useState, useEffect, useCallback} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FieldList from './fieldlist.jsx';

import './react-tabs.css';

export default (props) => (
  <Tabs>
    <TabList>
        {
            props.citationInfo["citation-items"].map((ignoreThisArgument, idx) => {
                return <Tab key={ignoreThisArgument}>Cite {idx + 1}</Tab>
            })
        }
    </TabList>

    {
        props.citationInfo["citation-items"].map((ignoreThisArgument, idx) => {
            return <TabPanel key={ignoreThisArgument}>
                <FieldList selectedIndex={idx} citationInfo={props.citationInfo} urlStub={props.urlStub} />
            </TabPanel>
        })
    }
  </Tabs>
);
