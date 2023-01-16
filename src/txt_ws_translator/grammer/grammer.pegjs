start = Statement+;
Statement = Space/Tab/BREAK;
Space = 'S'{return " ";};
Tab = 'T'{return "\t";};
BREAK = '\n'/'\r\n' {return "\n";};