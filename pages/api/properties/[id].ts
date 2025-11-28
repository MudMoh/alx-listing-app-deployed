import { NextApiRequest, NextApiResponse } from 'next';
import { PROPERTYLISTINGSAMPLE } from '../../../constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === id);

    if (property) {
        res.status(200).json(property);
    } else {
        res.status(404).json({ message: 'Property not found' });
    }
}
