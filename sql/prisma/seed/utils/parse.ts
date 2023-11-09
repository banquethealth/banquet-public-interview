import {parse} from "csv-parse";
import {camelCase, map} from "lodash";
import {createReadStream} from "fs";
import {join} from "path";

export const parseCsv = (filePath: string): Promise<any> => {

    return new Promise((resolve, reject) => {

        const records: any[] = []

        const parser = parse({
            delimiter: ',',
            columns: (headers) => {
                return map(headers, (header: any) => camelCase(header))
            },
            cast: (value, context) => {
                const number = Number(value)
                if (!isNaN(number)) {
                    return number
                }
                const date = new Date(value)
                if (!isNaN(date.getTime())) {
                    return date
                }
                return value
            }
        })
        parser.on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });

        parser.on('end', function () {
            resolve(records)
        });

        parser.on('error', function (err) {
            reject(err)
        });

        const stream = createReadStream(filePath)
        stream.pipe(parser)

    })

}
