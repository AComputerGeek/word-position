// @author: Amir Armion
// @version: V.01

function wordPosition(words)
{
    const list = {};

    words.forEach( word => {
        const indices = [];

        for(let i = 0; i < words.length; i++)
        {
            if(word === words[i])
            {
                indices.push(i);
            }
        }

        list[`${word}`] = indices;
    })

    return list;
}
