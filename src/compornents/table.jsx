import * as React from 'react';

export default function Text() {
    return(
    <>
    <h1>横列が固定される表</h1>
    <table>
        <tr>
            <th class="fixed01">見出し</th>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
        </tr>
        <tr>
            <th class="fixed01">見出し</th>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
        </tr>
        <tr>
            <th class="fixed01">見出し</th>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
            <td>テキスト</td>
        </tr>
    </table>
    </>
    )
}