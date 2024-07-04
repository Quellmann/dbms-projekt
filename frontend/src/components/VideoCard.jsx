import { PlayCircleIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

export default function VideoCard(params) {
  return (
    <Link to={params.path}>
      <div className="group p-1 rounded-lg cursor-pointer bg-gray-50 dark:bg-slate-800 dark:hover:bg-sky-900">
        <div className="flex border rounded-lg aspect-video bg-gray-900 items-center justify-center">
          <PlayCircleIcon className="text-white w-20 h-20"></PlayCircleIcon>
        </div>
        <div className="line-clamp-2 font-bold dark:text-slate-200 group-hover:text-sky-400">
          {params.data.title}
        </div>
        <div className="flex justify-between text-sm dark:text-slate-400">
          <div>Views: {params.data.views}</div>
          <div>
            {formatDistanceToNow(new Date(params.data.lastUpdate), {
              addSuffix: true,
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
