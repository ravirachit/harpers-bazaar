import {jobs} from '../../../data'

export default async (req, res) => {
    res.status(200).json(jobs)
  }
  