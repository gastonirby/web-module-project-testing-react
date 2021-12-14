import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name:'',
    image: null,
    season: 1,
    number: 1,
    summary: 'testing summary',
    runtime: 1
}

const testImage = {
    id:1,
    name:'',
    image: null,
    season: 1,
    number: 1,
    summary: 'testing summary',
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>);
    const summary = screen.queryByText(/testing summary/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent('testing summary');
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testImage}/>);
    const image = screen.queryByAltText('./stranger_things.png');
    // expect(image).toBeInTheDocument();
});
